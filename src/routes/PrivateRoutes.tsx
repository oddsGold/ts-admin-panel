import { FC } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ECommerce from '../pages/Dashboard/ECommerce.tsx';
import Settings from '../pages/Settings.tsx';
import FormLayout from '../pages/Form/FormLayout.tsx';
import FormElements from '../pages/Form/FormElements.tsx';
import Profile from '../pages/Profile.tsx';

const PrivateRoutes: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<ECommerce />} />
      <Route path="/settings" element={<Settings />} />
      <Route path="/form-layout" element={<FormLayout />} />
      <Route path="/form-elements" element={<FormElements />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="*" element={<Navigate to="/" />}/>
    </Routes>
  );
};

export default PrivateRoutes;
