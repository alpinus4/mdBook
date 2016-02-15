initSidebarItems({"fn":[["copy","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may overlap.`copy` is semantically equivalent to C's `memmove`.SafetyCare must be taken with the ownership of `src` and `dst`. This method semantically moves the values of `src` into `dst`. However it does not drop the contents of `dst`, or prevent the contents of `src` from being dropped or used.ExamplesEfficiently create a Rust vector from an unsafe buffer:"],["copy_nonoverlapping","Copies `count * size_of<T>` bytes from `src` to `dst`. The source and destination may *not* overlap.`copy_nonoverlapping` is semantically equivalent to C's `memcpy`.SafetyBeyond requiring that the program must be allowed to access both regions of memory, it is Undefined Behavior for source and destination to overlap. Care must also be taken with the ownership of `src` and `dst`. This method semantically moves the values of `src` into `dst`. However it does not drop the contents of `dst`, or prevent the contents of `src` from being dropped or used.ExamplesA safe swap function:"],["drop_in_place","Executes the destructor (if any) of the pointed-to value.This has two use cases:It is *required* to use `drop_in_place` to drop unsized types like trait objects, because they can't be read out onto the stack and dropped normally.It is friendlier to the optimizer to do this over `ptr::read` when dropping manually allocated memory (e.g. when writing Box/Rc/Vec), as the compiler doesn't need to prove that it's sound to elide the copy.Undefined BehaviorThis has all the same safety problems as `ptr::read` with respect to invalid pointers, types, and double drops."],["null","Creates a null raw pointer.Examples"],["null_mut","Creates a null mutable raw pointer.Examples"],["read","Reads the value from `src` without moving it. This leaves the memory in `src` unchanged.SafetyBeyond accepting a raw pointer, this is unsafe because it semantically moves the value out of `src` without preventing further usage of `src`. If `T` is not `Copy`, then care must be taken to ensure that the value at `src` is not used before the data is overwritten again (e.g. with `write`, `zero_memory`, or `copy_memory`). Note that `*src = foo` counts as a use because it will attempt to drop the value previously at `*src`."],["read_and_drop","Variant of read_and_zero that writes the specific drop-flag byte (which may be more appropriate than zero)."],["replace","Replaces the value at `dest` with `src`, returning the old value, without dropping either.SafetyThis is only unsafe because it accepts a raw pointer. Otherwise, this operation is identical to `mem::replace`."],["swap","Swaps the values at two mutable locations of the same type, without deinitializing either. They may overlap, unlike `mem::swap` which is otherwise equivalent.SafetyThis is only unsafe because it accepts a raw pointer."],["write","Overwrites a memory location with the given value without reading or dropping the old value.SafetyThis operation is marked unsafe because it accepts a raw pointer.It does not drop the contents of `dst`. This is safe, but it could leak allocations or resources, so care must be taken not to overwrite an object that should be dropped.This is appropriate for initializing uninitialized memory, or overwriting memory that has previously been `read` from."],["write_bytes","Invokes memset on the specified pointer, setting `count * size_of::<T>()` bytes of memory starting at `dst` to `val`."]],"struct":[["Shared","A wrapper around a raw non-null `*mut T` that indicates that the possessor of this wrapper has shared ownership of the referent. Useful for building abstractions like `Rc<T>` or `Arc<T>`, which internally use raw pointers to manage the memory that they own."],["Unique","A wrapper around a raw non-null `*mut T` that indicates that the possessor of this wrapper owns the referent. This in turn implies that the `Unique<T>` is `Send`/`Sync` if `T` is `Send`/`Sync`, unlike a raw `*mut T` (which conveys no particular ownership semantics).  It also implies that the referent of the pointer should not be modified without a unique path to the `Unique` reference. Useful for building abstractions like `Vec<T>` or `Box<T>`, which internally use raw pointers to manage the memory that they own."]]});