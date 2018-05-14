## 1：安装方法
```
npm install react-native-realm-sync-storage --save

react-native link realm  ||  rnpm link realm
```

## 2：使用方法
##### 1：引入头文件
```
import Storage from 'react-native-realm-sync-storage'
```

##### 2：方法列表
```
Storage.get(key); // 通过key获取一个value值，如果不存在返回null

Storage.save(key, value); // 保存数据，注意：value为json格式数据

Storage.delete(key); // 通过key删除一个数据

Storage.deleteAll(); // 删除所有存储的数据，谨慎使用该操作，免得误删除数据

示例如下：
  _save(){
    Storage.save("text", {text:"react-native-realm-sync-storage"});
    let text = Storage.get("text");
    this.setState({
      text: text !== null ? text.text : ""
    });
  }

  _delete(){
    Storage.delete("text");
    let text = Storage.get("text");
    this.setState({
      text: text !== null ? text.text : ""
    });
  }
```

## 3：演示图片
![](https://github.com/China-Robin/react-native-realm-sync-storage/blob/master/sync.gif)