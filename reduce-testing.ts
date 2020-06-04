import * as htmlWriterFactory from './html-writer.factory';
import { Timer } from './timer';
import numbers from './numbers';

export class ReduceTesting {
  private writer: htmlWriterFactory.HTMLWriterFactory;

  /**
   * ReduceTesting constructor.
   *
   * @param writer {HTMLWriterFactory} HTML writer.
   */
  constructor(writer: htmlWriterFactory.HTMLWriterFactory) {
    this.writer = writer;
  }
  
  /**
    * Run reduce tests.
    *
    * @param maxTests {number} Max tests to run.
    */
  public run (maxTests: number): void {
    let timer = new Timer();
    let aggregatedReduce: number;
    let aggregatedFor: number;
    let sumResult: number;
    const numbersLength: number = numbers.length;

    // reduce()
    aggregatedReduce = 0;
    for(let i = 0; i < maxTests; i++){
      timer.start();
      sumResult = numbers.reduce((a, b) => a + b);
      timer.end();
      aggregatedReduce += timer.elapsedTime();
    }

    // for ()
    aggregatedFor = 0;
    for(let i = 0; i < maxTests; i++){
      timer.start();
      sumResult = 0;
      for(let i=0; i < numbersLength; i++) {
        sumResult += numbers[i];
      }
      timer.end();
      aggregatedFor += timer.elapsedTime();
    }

    this.writer.push(`reduce() elapsed time ${aggregatedReduce/maxTests}ms${aggregatedReduce < aggregatedFor ? ', <b>wins!</b>' : '.'}<br>`);
    this.writer.push(`for () elapsed time ${aggregatedFor/maxTests}ms${aggregatedFor < aggregatedReduce ? ', <b>wins!</b>' : '.'}`);
  }
}