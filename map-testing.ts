import * as htmlWriterFactory from './html-writer.factory';
import { Timer } from './timer';
import texts from './texts';

export class MapTesting {
  private writer: htmlWriterFactory.HTMLWriterFactory;

  /**
   * MapTesting constructor.
   *
   * @param writer {HTMLWriterFactory} HTML writer.
   */
  constructor(writer: htmlWriterFactory.HTMLWriterFactory) {
    this.writer = writer;
  }
  
  /**
    * Run map tests.
    *
    * @param maxTests {number} Max tests to run.
    */
  public run (maxTests: number): void {
    let timer = new Timer();
    let aggregatedMap: number;
    let aggregatedFor: number;
    let resultTexts: string[];
    const textsLength: number = texts.length;

    // map()
    aggregatedMap = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      resultTexts = texts.map(t => t.toUpperCase());
      timer.end();
      aggregatedMap += timer.elapsedTime();
    }

    // for ()
    aggregatedFor = 0;
    for (let i = 0; i < maxTests; i++){
      timer.start();
      resultTexts = [];
      for (let i=0; i < textsLength; i++) {
        resultTexts[i] = texts[i].toUpperCase();
      }
      timer.end();
      aggregatedFor += timer.elapsedTime();
    }

    this.writer.push(`map() elapsed time ${aggregatedMap/maxTests}ms${aggregatedMap < aggregatedFor ? ', <b>wins!</b>' : '.'}<br>`);
    this.writer.push(`for () elapsed time ${aggregatedFor/maxTests}ms${aggregatedFor < aggregatedMap ? ', <b>wins!</b>' : '.'}`);
  }
}