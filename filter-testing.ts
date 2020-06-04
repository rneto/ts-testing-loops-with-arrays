import * as htmlWriterFactory from './html-writer.factory';
import { Timer } from './timer';
import texts from './texts';

export class FilterTesting {
  private writer: htmlWriterFactory.HTMLWriterFactory;

  /**
   * FilterTesting constructor.
   *
   * @param writer {HTMLWriterFactory} HTML writer.
   */
  constructor(writer: htmlWriterFactory.HTMLWriterFactory) {
    this.writer = writer;
  }
  
  /**
    * Run filter tests.
    *
    * @param maxTests {number} Max tests to run.
    */
  public run (maxTests: number): void {
    let timer = new Timer();
    let aggregatedFilter: number;
    let aggregatedFor: number;
    let resultTexts: string[];
    const charToFind: string = 'a';
    const textsLength: number = texts.length;

    // filter()
    aggregatedFilter = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      resultTexts = texts.filter(t => t.charAt(0) === charToFind);
      timer.end();
      aggregatedFilter += timer.elapsedTime();
    }

    // for ()
    aggregatedFor = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      resultTexts = [];
      for (let i=0; i < textsLength; i++){
        if(texts[i].charAt(0) === charToFind){
          resultTexts.push(texts[i]);
        }
      }
      timer.end();
      aggregatedFor += timer.elapsedTime();
    }

    this.writer.push(`filter() elapsed time ${aggregatedFilter/maxTests}ms${aggregatedFilter < aggregatedFor ? ', <b>wins!</b>' : '.'}<br>`);
    this.writer.push(`for () elapsed time ${aggregatedFor/maxTests}ms${aggregatedFor < aggregatedFilter ? ', <b>wins!</b>' : '.'}`);
  }
}