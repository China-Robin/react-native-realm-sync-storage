/**
 * 持久化工具类
 */
const Realm = require('realm');

// 初始化表
let realm = new Realm({path:'SyncStorage.realm', schema: [{
  name: 'Storage',
  primaryKey: 'key',
  properties: {
    key: 'string',
    value: 'string'
  }
}]});

export default class YXStorage{

  /**
   * 获取数据
   * @param key
   */
  static get(key){
    let Storage = realm.objects('Storage');
    let objects = Storage.filtered('key = "' + key + '"');
    if(objects.length >= 1){
      return JSON.parse(objects[0].value);
    }else{
      return null;
    }
  }

  /**
   * 保存数据
   * @param key
   * @param value
   */
  static save(key, value){
    realm.write(() => {
      realm.create('Storage', {key: key, value: JSON.stringify(value)}, true);
    });
  }

  /**
   * 删除数据
   * @param key
   */
  static delete(key){
    realm.write(() => {
      let Storage = realm.objects('Storage');
      let objects = Storage.filtered('key = "' + key + '"');
      realm.delete(objects);
    });
  }

  /**
   * 删除所有数据
   */
  static deleteAll(){
    realm.write(() => {
      let Storage = realm.objects('Storage');
      realm.delete(Storage);
    });
  }
}