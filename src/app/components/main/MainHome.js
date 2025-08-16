import React from 'react';
import { MainHeader } from './MainHeader';
import { MainSkill } from './MainSkill';
import { MainProjects } from './MainProjects';
import { MainContacts } from './Contacts';
import { Footer } from '../Footer';
export function MainHome() {
  return (
    <div className="min-h-screen flex flex-col bg-black items-center pt-40 text-white px-6">
     <MainHeader />
     <MainSkill />
     <MainProjects />
     <MainContacts />
    </div>
  );
}