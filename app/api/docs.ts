import IGetDocs from "app/Interfaces/docs/IGetDocs"

export default {
    algoritm: [
        {
            name:'Binary search',
            text:'Алгоритм поиска, котрый осуществляется путём дробления отсортированного массива на две части рекурсивно. big O(log 2) при больших входных данных.',
            code: ['arr = [1,2,3,4,5]'],
            classConstructor: 'binarySearch',
            api:'binary-search',
            category: "dataArgument"
        },
        {
            name:'Quick sort',
            text:'Алгоритм сортировки, который осущестляется путём поиска меньших и больших значений опорной точки рекурсивно. big O(log 2 * n) при больших входных данных.',
            code: ['arr = [5,4,3,1,2]'],
            classConstructor: 'QuickSort = new QuickSort',
            api:'quick-sort',
            category: "selectArgument"
        },
        {
            name:'Merge sort',
            text:'Алгоритм сортировки, который осущестляется путём дробления массива циклически на две части, при этом сравнивая первые элементы этих частей. big O(log 2 * n) при больших входных данных.',
            code: ['arr = [5,4,3,1,2]'],
            classConstructor: 'MergeSort = new MergeSort',
            api:'merge-sort',
            category: "selectArgument"
        }
    ], 
    struct: [
        {
            name:'Array',
            text:'Структура данных с фиксированным количеством элементов. Массив индексируется с нуля. В массиве можно вставлять элементы в конец.',
            code: ['arr = [a, b, c, d, f]'],
            classConstructor: 'arr.add',
            api:'array',
            category: "dataArgument"
        },
        {
            name:'Linked list',
            text:'Список с последовательно связанными элементами. Каждый элемент имеет ссылку на следующий элемент.',
            code: ['linkedList = new LinkedList([a,b,c,d,f])'],
            classConstructor: 'linkedList.add',
            api:'linked-list',
            category: "dataArgument"
        },
        {
            name:'Hash map',
            text:'Структура данных, которая строится по идеи ключа и значения. Хэш таблица реализована благодаря массиву, в которой ключи преобразовываются хэщ функцией.',
            code: ['hashTable = {a: “a”, b: “b”, c:”c”}'],
            classConstructor: 'hashTable.add',
            api:'hash-map',
            category: "dataArgument"
        },
    ],
    pattern:[
        {
            name:'Factory method',
            text:'Шаблон проектирования позволяет объявлять классы, выборочно в момент вызова конструктора, наследуемых от одного интерфейса.',
            code: ['A: IABC, B : IABC, C : IABC'],
            classConstructor: 'Factory.getClass',
            api:'factory-method',
            category: "dataArgument"
        }
    ]
} as {
    algoritm: Array<IGetDocs>,
    struct: Array<IGetDocs>,
    pattern: Array<IGetDocs>,
}