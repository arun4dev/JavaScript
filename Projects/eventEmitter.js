// 📝 Short Description of the EventEmitter Project
// This project is a small JavaScript system that allows you to register functions under event names and run them later by triggering those events. It works just like how browsers and Node.js handle events internally.
// You can:
// Add a listener using on(eventName, callback)
// Trigger an event using emit(eventName, ...args)
// Remove a listener using off(eventName, callback)

function EventEmitter() {
    const events = {};  // private registry
  
    this._getEvents = function () {
      return events;
    };
  }
  
  EventEmitter.prototype.on = function (eventName, callback, context = null) {
    const events = this._getEvents();
  
    if (!events[eventName]) {
      events[eventName] = [];
    }
  
    events[eventName].push({ callback, context });
  };
  
  EventEmitter.prototype.emit = function (eventName, ...args) {
    const events = this._getEvents();
  
    const listeners = events[eventName];
    if (!listeners) return;
  
    listeners.forEach(listener => {
      listener.callback.apply(listener.context, args);
    });
  };

  EventEmitter.prototype.off = function (eventName, callback) {
    const events = this._getEvents();
  
    const listeners = events[eventName];
    if (!listeners) return;
  
    // Keep only those listeners whose callback is NOT the one we want to remove
    events[eventName] = listeners.filter(
      listener => listener.callback !== callback
    );
  };
  

  
  function greet(name) {
    console.log("Hello " + name);
  }
  
  function bye(name) {
    console.log("Goodbye " + name);
  }
  function good(name) {
    console.log("Good " + name);
  }
  
  const emitter = new EventEmitter();
  
  emitter.on("welcome", greet);
  emitter.on("welcome", good);
  emitter.on("welcome", bye);
  emitter.emit("welcome", "Arun");
  
  // Remove greet
  emitter.off("welcome", greet);
  emitter.emit("welcome", "Arun");
  
 