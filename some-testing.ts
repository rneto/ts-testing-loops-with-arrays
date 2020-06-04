import * as htmlWriterFactory from './html-writer.factory';
import { Timer } from './timer';
import texts from './texts';

export class SomeTesting {
  private writer: htmlWriterFactory.HTMLWriterFactory;

  /**
   * SomeTesting constructor.
   *
   * @param writer {HTMLWriterFactory} HTML writer.
   */
  constructor(writer: htmlWriterFactory.HTMLWriterFactory) {
    this.writer = writer;
  }
  
  /**
    * Run some tests.
    *
    * @param maxTests {number} Max tests to run.
    */
  public run (maxTests: number): void {
    let timer = new Timer();
    let aggregatedSome: number;
    let aggregatedFor: number;
    let hasSome: boolean;
    const textToFind: string = 'c813unzygm';
    const textsLength: number = texts.length;

    // some()
    aggregatedSome = 0;
    for(let i = 0; i < maxTests; i++){
      timer.start();
      hasSome = texts.some(t => t === textToFind);
      timer.end();
      aggregatedSome += timer.elapsedTime();
    }

    // for ()
    aggregatedFor = 0;
    for(let i = 0; i < maxTests; i++){
      timer.start();
      hasSome = false;
      for(let i=0; i < textsLength; i++){
        if(texts[i] === textToFind){
          hasSome = true;
          break;
        }
      }
      timer.end();
      aggregatedFor += timer.elapsedTime();
    }

    this.writer.push(`some() elapsed time ${aggregatedSome/maxTests}ms${aggregatedSome < aggregatedFor ? ', <b>wins!</b>' : '.'}<br>`);
    this.writer.push(`for () elapsed time ${aggregatedFor/maxTests}ms${aggregatedFor < aggregatedSome ? ', <b>wins!</b>' : '.'}`);
  }
}