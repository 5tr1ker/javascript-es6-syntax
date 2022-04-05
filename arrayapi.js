{
    const a = ['a' , 'b' , 'c' , 'd'];
    const result = a.join(' , '); // 배열에 있는 모든 값을 구분자를 통해 문자열로 반환
    console.log(result);
}

{
    const a = "a , b , c , d , e";
    const result = a.split(',' , 2); // 구분자를 통해 배열로 나눠서 저장 / 반환받을 배열 크기
    console.log(result);
}

{
    const a = ["a" ," b" , "c" , "d" , "e"];
    const result = a.reverse(); // 반대로 실행 배열 자체를 변화시킴
    console.log(a);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.splice(0 , 2 , 'd' , 'e'); // 배열 내 데이터 삭제 () 후 추가
    const result1 = a.splice(1 , 0 , 'aa' , 'ab'); // 0과 1사이 값 추가 1 1 -> 1자리에 배열 추가
    console.log(a);
    console.log(result);
}

// 조건에 만족하는 값
{
    const a = [1,2,3,4,5]
    const result = a.find((item , index) => { // 객체 , 번호
        return item;
    }) // 객체를 하나씩 열거 후
    console.log(result);

    // findIndex 조건에 만족하는 Index위치
    const result2 = a.findIndex((item , index) => { // 객체 , 번호 
        return true;
    }) // 객체를 하나씩 열거 후
    console.log(result2);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.some((data) => data==='a'); // 배열 어떤 요소가 있으면 true
    console.log(result);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.filter((data) => {
        if(data === 'a' || data === 'c' || data === 'e') {
            return data;
        }
    }); // 만족하는 배열 전개
    console.log(result);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.map((data , index ) => {
        return Object.assign( {} , {
            id : index + 1,
            data : data + 'P'
        });
    });
    console.log(result);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.reduce((prev , curr) => prev + curr , 'reduce'); // 배열을 하나씩 열거 , 초기값 설정 
    console.log(result);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.sort() // 정렬
    console.log(result);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.slice(0,3); // 배열 자르기
    console.log(result);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.concat(['f' , 'g'] , ['h' , 'i']); // 배열 붙히기
    console.log(result);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.push('f', 'g') // 배열 붙히기 result 는 총 길이 반환
    a.unshift('aaa'); // 앞에 배열 넣기
    console.log('awdawd', a);
}
// 하지만 shift 와 unshift 는 push pop 보다 느리다!
{
    const a = ["a" , "b" , "c" , "d" , "e"];
    const result = a.pop(); // 뒤에서 하나씩 빼기
    a.shift(); // 앞에서 배열 빼기 
    console.log(a);
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    a.forEach((item , index , arr) => { // 배열값 , 인자값 , 배열 이름
        console.log(`${index + 1} : ${item}`);
    });
}

{
    const a = ["a" , "b" , "c" , "d" , "e"];
    console.log(a.indexOf('e')); // 존재하면 인덱스 번호 없으면 -1
    console.log(a.lastIndexOf('c')); // 뒤에서 부터 존재하면 인덱스 번호 
    console.log(a.includes('a')); // 존재하면 true
}

