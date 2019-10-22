sentence = "hello from lighthouse Labs";
let count = 0;
let stringCount = 0;

for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
    stringCount += 1;
    if (stringCount === sentence.length) {
      process.stdout.write('\n');
    }

  }, count += 50);
}




