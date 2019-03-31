export type ListItem = {
    title: string,
    items?: ListItem[]
};

export const menuList: ListItem[] = [
    {
        title: 'Животные',
        items: [
            {
                title: 'Млекопитающие',
                items: [
                    {title: 'Коровы'},
                    {title: 'Ослы'},
                    {title: 'Быки'},
                    {title: 'Тигра'},
                ]
            },
            {
                title: 'Другие',
                items: [
                    {title: 'Змеи'},
                    {title: 'Птицы'}
                ]
            }
        ]
    },
    {
        title: 'Рыбы',
        items: [
            {
                title: 'Аквариумные',
                items: [
                    {title: 'Гуппи'},
                    {title: 'Скалярии'},
                ]
            },
            {
                title: 'Форель',
                items: [
                    {title: 'Морская форель'},
                ]
            }
        ]
    },
];
