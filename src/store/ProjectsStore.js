import {makeAutoObservable, runInAction} from 'mobx';

class ProjectsStore {
    projects = [];
    fetched = false;

    constructor() {
        makeAutoObservable(this);
    };

    fetchProjects = () => {
        // fake API:
        setTimeout(
            () => {
                runInAction(() => {
                    this.projects = [
                        {
                            image: '/images/badge-1.svg',
                            name: 'ПривeтТур',
                            url: 'privettur.ru',
                            attendance: 2546,
                            timeOnSite: 3.58,
                            viewingDepth: 3.58,
                            devices: {
                                mobile: 75,
                                desktop: 25,
                            },
                            audience: {
                                female: 75,
                                male: 25,
                            },
                            statistic: [
                                {
                                    key: '1авто лобовое стекло',
                                    value: 12,
                                },
                                {
                                    key: 'автосервис замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'задняя тонировка',
                                    value: 2398,
                                },
                                {
                                    key: 'евроглаз самара замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'бронирование фар полиуретановой пленкой',
                                    value: 239,
                                },
                                {
                                    key: 'автосервис замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'задняя тонировка',
                                    value: 2398,
                                },
                                {
                                    key: 'евроглаз самара замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'бронирование фар полиуретановой пленкой',
                                    value: 239,
                                },
                                {
                                    key: 'автосервис замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'задняя тонировка',
                                    value: 2398,
                                },
                                {
                                    key: 'евроглаз самара замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'бронирование фар полиуретановой пленкой',
                                    value: 239,
                                },
                                {
                                    key: 'автосервис замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'задняя тонировка',
                                    value: 2398,
                                },
                                {
                                    key: 'евроглаз самара замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'бронирование фар полиуретановой пленкой',
                                    value: 239,
                                },
                                {
                                    key: 'автосервис замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'задняя тонировка',
                                    value: 2398,
                                },
                                {
                                    key: 'евроглаз самара замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'бронирование фар полиуретановой пленкой',
                                    value: 239,
                                },
                            ]
                        },
                        {
                            image: '/images/badge-2.svg',
                            name: 'ГильдияПро',
                            url: 'guildpro.ru',
                            attendance: 12312,
                            timeOnSite: 3.58,
                            viewingDepth: 3.58,
                            mobile: 75,
                            desktop: 25,
                            female: 75,
                            male: 25,
                            statistic: [
                                {
                                    key: '2авто лобовое стекло',
                                    value: 12,
                                },
                                {
                                    key: 'автосервис замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'задняя тонировка',
                                    value: 2398,
                                },
                                {
                                    key: 'евроглаз самара замена лобового стекла',
                                    value: 231,
                                },
                                {
                                    key: 'бронирование фар полиуретановой пленкой',
                                    value: 239,
                                },
                            ]
                        },
                    ].map((item, i) => {
                        item.id = i;
                        return item;
                    });
                    this.fetched = true;
                });
            },
            2000
        );
    };

    addProject = (data) => {
        console.log('data', data);
    }

    deleteProject = (id) => {
        this.projects = this.projects.filter((project) => project.id !== id);
    };
}

export default new ProjectsStore();
