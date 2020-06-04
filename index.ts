// Import modules
import * as htmlWriterFactory from './html-writer.factory';
import { maxArrayLength, maxTestsLength } from './config';
import { MapTesting } from './map-testing';
import { FilterTesting } from './filter-testing';
import { ReduceTesting } from './reduce-testing';
import { SomeTesting } from './some-testing';
import { EveryTesting } from './every-testing';
 import { ForEachTesting } from './foreach-testing';
// Import stylesheets
import './style.css';

// Welcome code!
let writer = htmlWriterFactory.createHTMLWriter('app');
writer.push(`<h1>Testing loops with arrays in TypeScript</h1>`);
writer.push(`Reference tests for <a href='https://rneto.es/blog/optimizar-bucles-javascript/' target='_blank'>Optimize loops in JavaScript</a>.`);
writer.push(`<p>Each case is tested <b>${maxTestsLength}</b> times with arrays of <b>${maxArrayLength}</b> random elements. You can change these values in <em>config.ts</em> file.</p>`);

// Loops tests - map
writer = htmlWriterFactory.createHTMLWriter('map');
writer.push(`<h2>Battle #1 <small>map() vs for () testing</small></h2>`);
let mapTesting = new MapTesting(writer);
mapTesting.run(maxTestsLength);

// Loops tests - filter
writer = htmlWriterFactory.createHTMLWriter('filter');
writer.push(`<h2>Battle #2 <small>filter() vs for () testing</small></h2>`);
let filterTesting = new FilterTesting(writer);
filterTesting.run(maxTestsLength);

// Loops tests - reduce
writer = htmlWriterFactory.createHTMLWriter('reduce');
writer.push(`<h2>Battle #3 <small>reduce() vs for () testing</small></h2>`);
let reduceTesting = new ReduceTesting(writer);
reduceTesting.run(maxTestsLength);

// Loops tests - some
writer = htmlWriterFactory.createHTMLWriter('some');
writer.push(`<h2>Battle #4 <small>some() vs for () testing</small></h2>`);
let someTesting = new SomeTesting(writer);
someTesting.run(maxTestsLength);

// Loops tests - every
writer = htmlWriterFactory.createHTMLWriter('every');
writer.push(`<h2>Battle #5 <small>every() vs for () testing</small></h2>`);
let everyTesting = new EveryTesting(writer);
everyTesting.run(maxTestsLength);

// Loops tests - forEach
writer = htmlWriterFactory.createHTMLWriter('forEach');
writer.push(`<h2>Battle #6 <small>forEach() vs for () testing</small></h2>`);
let forEachTesting = new ForEachTesting(writer);
forEachTesting.run(maxTestsLength);