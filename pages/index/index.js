//index.js
import creatorPage from './../create';
import IndexService from './index.service';
const app = getApp()
class Index {
  constructor() {
    this.ser = new IndexService();
  }
}
Page(creatorPage(Index));