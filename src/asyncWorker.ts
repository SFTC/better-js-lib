/* eslint-disable @typescript-eslint/explicit-member-accessibility */
export default class AsyncWorker {
  callback: any;
  currentWorker: any;
  file: any;
  options: any;
  worker: any;
  /**
   * @param {上传文件} file
   * @param {文件类型} type
   * @param {相关参数} options
   * @param {回调函数} callback
   */
  constructor(file: any, Worker: any, options: any, callback: any) {
    this.file = file;
    this.options = options;
    this.callback = callback;
    this.worker = null;
    this.currentWorker = Worker;
  }
  // 初始化worker
  init(): void {
    this.worker = new this.currentWorker();
    this.worker.postMessage({
      file: this.file,
      options: this.options
    });
    this.worker.onmessage = (e: { data: any }): void => {
      this.callback(e.data);
      this.close();
    };
  }
  // 关闭worker
  close(): void {
    this.worker.terminate();
  }
}
