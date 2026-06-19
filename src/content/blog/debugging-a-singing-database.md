---
title: "Debugging a database that only sings on Fridays"
description: "A nonsense debugging diary with command snippets, SQL, logs, and a very normal production incident."
pubDate: 2026-06-08
tags: ["Debugging", "SQL", "Incident"]
draft: false
heroImage: "/images/twitch-song-request-desktop.webp"
---

The bug report said the database was "humming through the vents." That was not actionable, but it was at least reproducible after lunch.

![A placeholder desktop app image](/images/twitch-song-request-desktop.webp)

## First check

```bash
npm run diagnostics -- --tone=minor --weekday=friday
```

The logs were unhelpful in a way that felt almost elegant:

```txt
12:04:18 database: connected
12:04:19 database: warmed up
12:04:20 database: la la la
```

## Query

```sql
select
  table_name,
  count(*) as suspicious_rows
from information_schema.tables
where table_name like '%chorus%'
group by table_name
order by suspicious_rows desc;
```

## Findings

1. The read replica had perfect pitch.
2. The migration name included the word `anthem`.
3. Nobody had touched the cron job, which means the cron job was obviously involved.

The fix was to remove one unused environment variable and pretend that explained the whole thing.
