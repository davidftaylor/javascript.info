/* Task:

Usually, an attempt to read a non-existent property returns undefined.

Create a proxy that throws an error for an attempt to read of a non-existent property instead.

That can help to detect programming mistakes early.

Write a function wrap(target) that takes an object target and return a proxy that adds this functionality aspect.

*/

let user = {
  name: "John"
};

function wrap(target) {
  return new Proxy(target, {
    get (target, prop, receiver) {
      if (target[prop] === undefined) {
        throw new ReferenceError('Property doesn\'t exist');
      }
      return Reflect.get(target, prop, receiver);
    }
  });
}

user = wrap(user);

alert(user.name); // John
alert(user.age); // ReferenceError: Property doesn't exist: "age"