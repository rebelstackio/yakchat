# rolebase singup

see the singup cloud function

to call the cloud functction
```js
var functions = app.functions();

const signup = functions.httpsCallable('signup');
signup({
    email: 'user@email.com',
    password: '134646',
    displayName: 'userDisplaName',
    type: usertype
})
```
the user types can be
```js
{
    1: 'operator',
    2: 'client-t0',
    3: 'client-t1',
    4: 'client-t2',
    5: 'admin'
}

```