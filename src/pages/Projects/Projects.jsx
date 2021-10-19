import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {observer} from 'mobx-react-lite';
import ProjectsStore from 'store/ProjectsStore';
import styles from './Projects.module.scss';

// Components:
import Project from './Project/Project';
import Preloader from 'components/Preloader/Preloader';

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
          : <Preloader/>
        }
    </>);
}

export default observer(Projects);
