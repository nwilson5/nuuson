---
title: "ID assignment beyond next in sequence"
date: "2024-07-29"
excerpt: "Explore how we implemented and expanded on Pinterest's approach to ID generation, packing useful information into our database record IDs."
---

# Lessons from Pinterest

In the world of database design and distributed systems, generating unique identifiers for records is a crucial task. Inspired by Pinterest's engineering approach, we've implemented a system using BIGINT's 64 bits to create more meaningful IDs for our records. This post will dive into our implementation, its benefits, and some unexpected uses we've found along the way.

## The Inspiration

Pinterest's approach to ID generation caught our attention. They utilized the 64 bits of a BIGINT to pack in useful information beyond just uniqueness. We decided to adapt this concept for our own needs, creating a system that would allow for:

1. Timestamp inference
2. Sharding capabilities
3. Record type classification

## Our Implementation

We implemented this system in PostgreSQL. Here's a breakdown of how we use the 64 bits:

- 41 bits for timestamp
- 10 bits for shard ID
- 10 bits for sequence ID
- 3 bits for record type

### The Core Function

The heart of our system is the `next_id` function:

```sql
CREATE OR REPLACE FUNCTION public.next_id(IN bigint, OUT result bigint) AS $$
DECLARE
    our_epoch bigint := public.our_epoch();
    now_millis bigint := FLOOR(EXTRACT(EPOCH FROM clock_timestamp()) * 1000);
    shard_id bigint := FLOOR(random()*1024);
    seq_id bigint := nextval('public.table_id_seq') % 1024;
    add_id ALIAS FOR $1; -- 3 bits, so 0-7 are your options for distinct choices
BEGIN
    result := (now_millis - our_epoch) << 23;
    result := result | (shard_id << 13);
    result := result | (seq_id << 3);
    result := result | (add_id % 8);
END;
$$ LANGUAGE PLPGSQL;
```

This function generates a unique ID by combining:
1. The current timestamp (milliseconds since our custom epoch)
2. A random shard ID
3. A sequence ID
4. A type identifier (passed as a parameter)

### Type-Specific ID Generators

We then created specific functions for different record types:

```sql
CREATE OR REPLACE FUNCTION public.next_record_id(OUT result bigint) AS $$
BEGIN
    -- primary record bits -> 000
    result := next_id(0);
END;
$$ LANGUAGE PLPGSQL;

CREATE OR REPLACE FUNCTION public.next_user_id(OUT result bigint) AS $$
BEGIN
    -- user bits -> 001
    result := next_id(1);
END;
$$ LANGUAGE PLPGSQL;

-- ... and so on for other types
```

These functions make it easy to generate IDs for specific record types while maintaining the overall structure.

## Extracting Information from IDs

One of the benefits of this approach is the ability to extract information directly from the ID. We implemented functions to do just that:

```sql
CREATE OR REPLACE FUNCTION public.get_shard(IN id BIGINT, OUT int) AS $$
    SELECT (id::bit(64) << 41 >> 54)::bigint::int;
$$ LANGUAGE SQL IMMUTABLE;

CREATE OR REPLACE FUNCTION public.timestamp_from_id(bigint)
RETURNS TIMESTAMP WITH TIME ZONE AS $$
DECLARE
    our_epoch bigint := public.our_epoch();
BEGIN
    RETURN TIMESTAMP WITH TIME ZONE 'epoch' + (($1::bit(64) >> 23)::bigint + our_epoch) * INTERVAL '1 millisecond';
END;
$$ LANGUAGE PLPGSQL;
```

These functions allow us to retrieve the shard ID and creation timestamp of a record simply from its ID.

## Unexpected Benefits and Future Uses

While we initially implemented sharding capabilities, we found that we didn't actually need them for our current scale. However, having those bits reserved has proven useful for potential future scaling.

The real value came from the ability to store additional information within the ID itself. For example:

1. In our staging data and data warehousing, we started incorporating source file IDs, timestamps, and record iterators all within a single identifier.
2. For geographical data, we created custom identifiers that included bits for the geonames ID as well as our internal classification system. This allowed us to identify the type of geographical entity (city, region, country, postal code) simply from its ID.

## Conclusion

This approach to ID generation has provided us with a flexible and information-rich system. While inspired by Pinterest, we've adapted and expanded it to suit our specific needs. The ability to pack meaningful data into our IDs has improved our data management and opened up new possibilities for quick data analysis and classification.

Remember, when implementing a system like this, it's crucial to choose information that won't change over time. The immutability of this embedded data is key to maintaining the integrity and usefulness of your IDs.

Have you implemented a similar system? We'd love to hear about your experiences and any clever uses you've found for packed IDs!
