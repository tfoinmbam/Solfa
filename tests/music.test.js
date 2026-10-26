import {test} from 'node:test';
import assert from 'node:assert/strict';
import {midi,syllable} from '../src/music.js';
test('pitch parsing supports sharps, flats and octaves',()=>{assert.equal(midi('A4'),69);assert.equal(midi('F#4'),66);assert.equal(midi('Gb4'),66);assert.equal(midi('H4'),null);assert.equal(midi('C'),null)});
test('movable do follows the tonic across key boundaries',()=>{assert.deepEqual(['G4','A4','B4','C5','D5','E5','F#5'].map(n=>syllable(n,'G')),['do','re','mi','fa','sol','la','ti']);assert.equal(syllable('C4','D'),'li');assert.equal(syllable('Db4','D♭'),'do')});
test('fixed do retains concert pitch syllables',()=>{assert.equal(syllable('C4','G','fixed'),'do');assert.equal(syllable('G4','G','fixed'),'sol');assert.equal(syllable('bad'),'—')});
