import React from 'react';
import { NextPage } from 'next';
import { MainLayout } from '../layouts/MainLayout';
import { WriteForm } from '../components/WriteForm';

// interface WritePageProps {}

const WritePage: NextPage = () => {
  return (
    <MainLayout className="main-layout-white" hideMenu hideComments>
      <div style={{ backgroundColor: '#ffffff' }}>
        <WriteForm />
      </div>
    </MainLayout>
  );
};

export default WritePage;
