class Store {
    
    constructor() {
      this._callbacks = [];    
    }
    
    _emit(state) {
        this._callbacks.forEach(callback => callback(state));
    }
    
    /*subscribe(callback) {
      this._callbacks.push(callback);
    }*/
    
}

class Id_for_user extends Store {
    
   constructor() {       
      super(); 
      this._id = '';
   } 
   
   increase(v) {
      this._id = v;
      super._emit(this._id);
   }
   
}

class IdFactory_for_user {
   
   static _id = null;
   
   static _createInstance() {
     return new Id_for_user();
   }
      
   static createInstance() {
      if (IdFactory_for_user._id === null) {
        IdFactory_for_user._id = IdFactory_for_user._createInstance();
      }      
      return IdFactory_for_user._id;
   }
}

class Id_for_admin extends Store {

    constructor() {
        super();
        this._id = '';
    }

    increase(v) {
        this._id = v;
        super._emit(this._id);
    }

}

class IdFactory_for_admin {

    static _id = null;

    static _createInstance() {
        return new Id_for_admin();
    }

    static createInstance() {
        if (IdFactory_for_admin._id === null) {
            IdFactory_for_admin._id = IdFactory_for_admin._createInstance();
        }
        return IdFactory_for_admin._id;
    }
}

export {IdFactory_for_user, IdFactory_for_admin};