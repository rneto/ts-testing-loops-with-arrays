import * as htmlWriterFactory from './html-writer.factory';
import { Timer } from './timer';
import texts from './texts';

export class EveryTesting {
  private writer: htmlWriterFactory.HTMLWriterFactory;

  /**
   * EveryTesting constructor.
   *
   * @param writer {HTMLWriterFactory} HTML writer.
   */
  constructor(writer: htmlWriterFactory.HTMLWriterFactory) {
    this.writer = writer;
  }
  
  /**
    * Run every tests.
    *
    * @param maxTests {number} Max tests to run.
    */
  public run (maxTests: number): void {
    let timer = new Timer();
    let aggregatedEvery: number;
    let aggregatedFor: number;
    let hasEvery: boolean;
    const textsLength: number = texts.length;

    // every()
    aggregatedEvery = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      hasEvery = texts.every(t => t.length > 5);
      timer.end();
      aggregatedEvery += timer.elapsedTime();
    }

    // for ()
    aggregatedFor = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      hasEvery = true;
      for (let i=0; i < textsLength; i++){
        if(texts[i].length <= 4){
          hasEvery = false;
          break;
        }
      }
      timer.end();
      aggregatedFor += timer.elapsedTime();
    }

    this.writer.push(`every() elapsed time ${aggregatedEvery/maxTests}ms${aggregatedEvery < aggregatedFor ? ', <b>wins!</b>' : '.'}<br>`);
    this.writer.push(`for () elapsed time ${aggregatedFor/maxTests}ms${aggregatedFor < aggregatedEvery ? ', <b>wins!</b>' : '.'}`);
  }
}