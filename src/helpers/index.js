
//функция для динамической пагинации
export const getPagination = array => {                                                 // получает массив объектов c данными об артистах
    const length = array.length;                                                        // получаем его длину
    const numberInPage = 9;                                                             // numberInPage это сколько у нас на одной странице артистов
    const newArray = [];                                                                // этот массив будем набивать и возвращать
    const numberOfPages = Math.floor(length / numberInPage) + 1;                        // получаем кол-во страниц округлением
  
    for (let i = 0; i < numberOfPages * numberInPage; i = i + numberInPage) {           // циклом перебираем исходный массив и набиваем выходной
      newArray.push({                                                                   // массив, каждый объект содержит:
        index: i == 0 ? i : i / numberInPage,                                           // index - номер страницы
        from: i,                                                                        // при формировании списка на определённой странице будем
        to: i + numberInPage - 1                                                        // резать (slice) исходный (прилетает в список тоже) по
      });                                                                               // параметрам from и to
    }
    
    return newArray;
  };
