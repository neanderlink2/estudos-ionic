import { IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from '@ionic/react';
import React from 'react';
import { HiUser, HiViewList } from 'react-icons/hi';
import { Route } from 'react-router';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

const Routes = () => {
    return (
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/:tab(home)" component={Home} exact />
                <Route path="/:tab(profile)" component={Profile} exact />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="home" href="/home">
                    <HiViewList />
                    <IonLabel>Itens</IonLabel>
                </IonTabButton>

                <IonTabButton tab="profile" href="/profile">
                    <HiUser />
                    <IonLabel>Perfil</IonLabel>
                </IonTabButton>
            </IonTabBar>
        </IonTabs>
    )
}

export default Routes
