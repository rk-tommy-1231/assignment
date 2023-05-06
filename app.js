var count = 0;

while( count < 50 ) {
    count += 1;

    if(count % 10 === 0 && count % 4 === 0) {
      console.log('今' + count + '回ループしました。');
      console.log('4で割れる数です。' + count);
    } else if (count % 10 === 0) {
      console.log('今' + count + '回ループしました。');
    } else if (count % 4 === 0) {
      console.log('4で割れる数です。' + count);
    } else {
      console.log(count);
    }

    if(count === 50) {
      alert('50回カウントが終わりました。');
    }
}