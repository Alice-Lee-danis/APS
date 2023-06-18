import IGetDocs from "app/Interfaces/docs/IGetDocs"

export default {
    algoritm: [
        {
            name:'Binary search',
            text:'Алгоритм поиска, котрый осуществляется путём дробления отсортированного массива на две части рекурсивно. big O(log 2) при больших входных данных.',
            code: ['arr = [1,2,3,4,5]'],
            classConstructor: 'binarySearch',
            api:'binary-search',
            category: "dataArgument",
            image:'https://firebasestorage.googleapis.com/v0/b/apc-pet-roject.appspot.com/o/binary-search.png?alt=media&token=723065e7-466b-44fe-91b4-c330778621b6'
        },
        {
            name:'Quick sort',
            text:'Алгоритм сортировки, который осущестляется путём поиска меньших и больших значений опорной точки рекурсивно. big O(log 2 * n) при больших входных данных.',
            code: ['arr = [5,4,3,1,2]'],
            classConstructor: 'QuickSort = new QuickSort',
            api:'quick-sort',
            category: "selectArgument",
            image:'https://firebasestorage.googleapis.com/v0/b/apc-pet-roject.appspot.com/o/quick%20-sort.png?alt=media&token=d04a3539-6678-49e4-be51-14f9bb360951'
        },
        {
            name:'Merge sort',
            text:'Алгоритм сортировки, который осущестляется путём дробления массива циклически на две части, при этом сравнивая первые элементы этих частей. big O(log 2 * n) при больших входных данных.',
            code: ['arr = [5,4,3,1,2]'],
            classConstructor: 'MergeSort = new MergeSort',
            api:'merge-sort',
            category: "selectArgument",
            image:'https://firebasestorage.googleapis.com/v0/b/apc-pet-roject.appspot.com/o/merge-sort.png?alt=media&token=2813950e-43fd-4dea-a1bb-e269725b0c20'
            }
    ], 
    struct: [
        {
            name:'Array',
            text:'Структура данных с фиксированным количеством элементов. Массив индексируется с нуля. В массиве можно вставлять элементы в конец.',
            code: ['arr = [a, b, c, d, f]'],
            classConstructor: 'arr.add',
            api:'array',
            category: "dataArgument",
            image: 'https://firebasestorage.googleapis.com/v0/b/apc-pet-roject.appspot.com/o/array.png?alt=media&token=b041107a-fdcf-4526-bbbd-f990cf8b3ce4'
         },
        {
            name:'Linked list',
            text:'Список с последовательно-связанными элементами. Каждый элемент имеет ссылку на следующий элемент.',
            code: ['linkedList = new LinkedList([a,b,c,d,f])'],
            classConstructor: 'linkedList.add',
            api:'linked-list',
            category: "dataArgument",
            image: 'https://firebasestorage.googleapis.com/v0/b/apc-pet-roject.appspot.com/o/linked-list.png?alt=media&token=6e874d64-608b-46e7-bfe8-3d4bdf5b83f4'
        },
        {
            name:'Hash map',
            text:'Структура данных, которая строится по идеи ключа и значения. Хэш таблица реализована благодаря массиву, в котором ключи преобразовываются хэш-функцией.',
            code: ['hashTable = {a: “a”, b: “b”, c:”c”}'],
            classConstructor: 'hashTable.add',
            api:'hash-map',
            category: "dataArgument",
            image:'https://firebasestorage.googleapis.com/v0/b/apc-pet-roject.appspot.com/o/hash-table.png?alt=media&token=5d279be4-9ece-4170-a80c-578251f0239b'
        },
    ],
    pattern:[
        {
            name:'Factory method',
            text:'Шаблон проектирования позволяет объявлять классы, выборочно в момент вызова конструктора, наследуемых от одного интерфейса.',
            code: ['A: IABC, B : IABC, C : IABC'],
            classConstructor: 'Factory.getClass',
            api:'factory-method',
            category: 'dataArgument',
            image:'https://firebasestorage.googleapis.com/v0/b/apc-pet-roject.appspot.com/o/factory.png?alt=media&token=513ca9aa-548d-4b1a-80ea-5a94d994aa89'
            }
    ]
} as {
    algoritm: Array<IGetDocs>,
    struct: Array<IGetDocs>,
    pattern: Array<IGetDocs>,
}