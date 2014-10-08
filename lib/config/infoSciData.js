'use strict';

var mongoose = require('mongoose'),
  Gist = mongoose.model('Gist');

/**
 * Populate database with sample application data
 */

 //Clear old things, then add things in

 Gist.find({}).remove(function() {
  Gist.create({  
    id : '144b19b58750ea833547',
    title : 'cis551Lab5CopyInput',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '03fa7b8940b34ad2bea8',
    title : 'cis551Lab2TestDouble (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '5508819aa7e234a1de5c',
    title : 'cis551HW9CrossProductMultThread (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'b3e0ab1c1d1252a8a0a2',
    title : 'cis551HW8XMLParserDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'abf6d780cb17d1917f32',
    title : 'cis551HW7MyTreeMapClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'a7ff6a285c2b7d2fc26d',
    title : 'cis551HW7MyHashTableDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'df0c05d46156f6c78ee0',
    title : 'cis551HW7MyHashTableClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '71b30527beefb2082d85',
    title : 'cis551HW6QueueDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'fad1e520ddf87bf8d5db',
    title : 'cis551HW6QueueClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '710c28b5a7e7d347556c',
    title : 'cis551HW6MyLinkedListDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'ab6f61e5a07700175ddb',
    title : 'cis551HW6MyLinkedListClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '4e1af9adf0799a53fe4c',
    title : 'cis551HW5MyArrayListDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '1aaee23cdef27788daf6',
    title : 'cis551HW5MyArrayList (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '43cf82b282e5857b4658',
    title : 'cis551HW5VesselDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'd5066c56a8452ca855d0',
    title : 'cis551HW5VesselClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'd4c2761ba406948ca79a',
    title : 'cis551HW4BankAccountDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'b11d6f5a1658b3561a3a',
    title : 'cis551HW4BankAccountClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '2a57e2cb7a671aaa1d0e',
    title : 'cis551HW3FractionDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '99bc77497a1614eaffd7',
    title : 'cis551HW3FractionClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'cc1118d377a1ea52fcdd',
    title : 'cis551HW3ComplexDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '6531226919b31b9a8e82',
    title : 'cis551HW3ComplexClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '8e1d38ee7f94b3ce4c9a',
    title : 'cis551HW3BillItem (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '086ae379ffda922bd0d9',
    title : 'cis551HW3BillDriver (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '3516b70dbcd90d8fff9d',
    title : 'cis551HW3BillClass (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '8f48342e30fc247ce917',
    title : 'cis551HW2CrossProduct (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '847f14a46be44dcbecb7',
    title : 'cis551HW2InsertionSort (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'f12a0da77c366305b099',
    title : 'cis551HW2Transpose (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'b9ac3254525dfd08d90d',
    title : 'cis551HW1ToLower (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'bcaae467f434f4eb8728',
    title : 'cis551HW1LineNumber (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '67a81811bb61cda33dc4',
    title : 'cis551HW1CalmDown (Java)',
    subtitle : 'CIS 551 Modern Programming in Java',
    language : 'Java SE',
    text : 'null',
    awesomeness: 10
  }, {
    id : '779f4817433f81b97b1b',
    title : 'ist600LetterFrequency',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : '8a4448c655c431455f69',
    title : 'ist600CurrencyConverter',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'de9d5b5e2b89ae52c91b',
    title : 'ist600PrintSquare',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'd7d0fe9c50f6a06ee67a',
    title : 'ist600Lab4CaesarModule',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : '20ce896c9ad725654bd6',
    title : 'ist600Lab4EncrypterModule',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : '4b8647a766ac527fac61',
    title : 'ist600Lab4KeysModule',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : '449d02383fc532087be0',
    title : 'ist600Lab3CaesarModule',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : '6fe1ede4740149409552',
    title : 'ist600Lab3EncrypterModule',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'fe6ff3545dde695ce00c',
    title : 'ist600Lab3KeysModule',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : 'd6fafe4ca0b1f23b856a',
    title : 'ist600Lab2',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, {
    id : '8073aed74c2d4792813d',
    title : 'ist600Lab1',
    subtitle : 'IST 600 Scripting Foundations',
    language : 'Python 2.x',
    text : 'null',
    awesomeness: 10
  }, function() {
      console.log('finished populating things');
    }
  );
});