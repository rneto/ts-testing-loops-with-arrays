import * as htmlWriterFactory from './html-writer.factory';
import { Timer } from './timer';
import numbers from './numbers';

export class ForEachTesting {
  private writer: htmlWriterFactory.HTMLWriterFactory;

  /**
   * ForEachTesting constructor.
   *
   * @param writer {HTMLWriterFactory} HTML writer.
   */
  constructor(writer: htmlWriterFactory.HTMLWriterFactory) {
    this.writer = writer;
  }
  
  /**
    * Run forEach tests.
    *
    * @param maxTests {number} Max tests to run.
    */
  public run (maxTests: number): void {
    let timer = new Timer();
    let aggregatedForEach: number;
    let aggregatedFor: number;
    let sumResult: number = 0;
    const numbersLength: number = numbers.length;

    // forEach()
    aggregatedForEach = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      numbers.forEach(n => sumResult += n);
      timer.end();
      aggregatedForEach += timer.elapsedTime();
    }

    // for ()
    aggregatedFor = 0;
    sumResult = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      for (let i=0; i < numbersLength; i++){
        sumResult += numbers[i];
      }
      timer.end();
      aggregatedFor += timer.elapsedTime();
    }

    this.writer.push(`forEach() elapsed time ${aggregatedForEach/maxTests}ms${aggregatedForEach < aggregatedFor ? ', <b>wins!</b>' : '.'}<br>`);
    this.writer.push(`for () elapsed time ${aggregatedFor/maxTests}ms${aggregatedFor < aggregatedForEach ? ', <b>wins!</b>' : '.'}`);
  }
}