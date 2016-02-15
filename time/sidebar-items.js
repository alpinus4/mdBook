initSidebarItems({"enum":[["ParseError",""]],"fn":[["at","Returns the specified time in the local timezone"],["at_utc","Returns the specified time in UTC"],["empty_tm",""],["get_time","Returns the current time as a `timespec` containing the seconds and nanoseconds since 1970-01-01T00:00:00Z."],["now","Returns the current time in the local timezone"],["now_utc","Returns the current time in UTC"],["precise_time_ns","Returns the current value of a high-resolution performance counter in nanoseconds since an unspecified epoch."],["precise_time_s","Returns the current value of a high-resolution performance counter in seconds since an unspecified epoch."],["strftime","Formats the time according to the format string."],["strptime","Parses the time from the string according to the format string."],["tzset",""]],"struct":[["Duration","ISO 8601 time duration with nanosecond precision. This also allows for the negative duration; see individual methods for details."],["PreciseTime","An opaque structure representing a moment in time.The only operation that can be performed on a `PreciseTime` is the calculation of the `Duration` of time that lies between them.ExamplesRepeatedly call a function for 1 second:"],["SteadyTime","A structure representing a moment in time.`SteadyTime`s are generated by a \"steady\" clock, that is, a clock which never experiences discontinuous jumps and for which time always flows at the same rate.ExamplesRepeatedly call a function for 1 second:"],["Timespec","A record specifying a time value in seconds and nanoseconds, where nanoseconds represent the offset from the given second.For example a timespec of 1.2 seconds after the beginning of the epoch would be represented as {sec: 1, nsec: 200000000}."],["Tm","Holds a calendar date and time broken down into its components (year, month, day, and so on), also called a broken-down time value."],["TmFmt","A wrapper around a `Tm` and format string that implements Display."]]});