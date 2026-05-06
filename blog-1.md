# 1. Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

## Introduction
 In typescript we have to define every property type, but some cases we are not sure which type necessary, in that case typescript provide us two top amazing types, "any" & "unknown" but in industry any labeled a "type safety hole & unknown the safer choice.

## Body
 The type "any" disables the type checking so the property value can be (string, number, boolean, undefined, null etc) which is dangerous, because in production garde application if we use type any it can create a lot of chaos, suppose in a big project one developer use type any use it function parameter so now he receiving a string but when a new developer comes and giving the function parameter an object and deploy it then it will crash the project and can create a lot problem that why any labeled a "type safety hole. On the other hand type "unknown" is the safer choice because its works like any type but like any it don't checking it asked for the type later and if we don't define it then it give us inline error. The concept of type narrowing is help us to check out types and narrow down a problem easily with types it help us to make our code more accurate, for type narrowing we can use typeof or instanceof.

## Example

```
const myName = (input: unknown) =>{
    if(typeof input === 'number'){
        return false
    }else{
        return true
    }
}

```

## Conclusion
 So we can say that when we are not sure which type is going to use in code don't blindly use type "any" instead of that always use type "unknown", because type "unknown" is way more safer than type "any".
