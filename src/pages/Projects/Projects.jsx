import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import ProjectsStore from 'store/ProjectsStore';
import styles from './Projects.module.scss';

// Components:
import Project from './Project/Project';
// import ContentLoader from 'react-content-loader';

// const Preloader = () => (<ContentLoader
//     speed={2}
//     width={995}
//     height={726}
//     viewBox="0 0 995 726"
//     backgroundColor="#f5f5f5"
//     foregroundColor="#dbdbdb"
// >
//     <rect y="362" width="995" height="2" fill="#C4C4C4"/>
//     <rect width="128" height="144" rx="5" fill="#C4C4C4"/>
//     <rect x="152" width="274" height="24" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="40" width="274" height="40" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="96" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="128" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="40" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="100" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="12" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="47" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="82" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="117" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect y="168" width="995" height="2" fill="#C4C4C4"/>
//     <rect y="194" width="128" height="144" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="194" width="274" height="24" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="234" width="274" height="40" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="290" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="322" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="234" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="294" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="206" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="241" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="276" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="311" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect y="388" width="128" height="144" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="388" width="274" height="24" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="428" width="274" height="40" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="484" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="516" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="428" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="488" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="400" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="435" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="470" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="505" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect y="556" width="995" height="2" fill="#C4C4C4"/>
//     <rect y="582" width="128" height="144" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="582" width="274" height="24" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="622" width="274" height="40" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="678" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="152" y="710" width="274" height="16" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="622" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="506" y="682" width="274" height="44" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="594" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="629" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="664" width="135" height="27" rx="5" fill="#C4C4C4"/>
//     <rect x="860" y="699" width="135" height="27" rx="5" fill="#C4C4C4"/>
// </ContentLoader>);

const Projects = () => {
    const {projects, fetched, fetchProjects} = ProjectsStore;
    const ListJsx = () => (<>
        <ul className={styles.list}>
            {projects.map((project) => (
                <Project project={project} key={project.id}/>
            ))}
        </ul>
    </>);
    const EmptyJsx = () => (<>
        <h1 className={styles.empty}>
            Здесь будут храниться<br/>ваши проекты
        </h1>
        <Link className={styles.link} to="/create">
            Создать ваш первый проект
        </Link>
    </>);

    useEffect(fetchProjects, [fetchProjects]);

    return (<>
        {fetched
            ? projects.length ? <ListJsx/> : <EmptyJsx/>
            : <div/>
        }
    </>);
}

export default observer(Projects);
