import { useState } from 'react';
import LandingPage from './pages/LandingPage';
import Berita from './pages/Berita'; // kamu bikin halaman Berita
import DetailBerita from './pages/DetailBerita'; // opsional
import ProfilSekolah from './pages/ProfilSekolah';
import Kepengurusan from './pages/Kepengurusan';
import Kontak from './pages/Kontak';
import GaleriKegiatan from './pages/GaleriKegiatan';
import FasilitasKegiatan from './pages/FasilitasKegiatan';
import KurikulumPembelajaran from './pages/KurikulumPembelajaran';

import './App.css';

function App() {
  const path = window.location.pathname;

  let PageComponent;

  if (path === '/berita') {
    PageComponent = <Berita />;
  } else if (path === '/detail-berita') {
    PageComponent = <DetailBerita />;
  } else if (path === '/profil-sekolah') {
    PageComponent = <ProfilSekolah />;
  } else if (path === '/data-kepengurusan') {
    PageComponent = <Kepengurusan />;
  } else if (path === '/kontak') {
    PageComponent = <Kontak />;
  } else if (path === '/galeri-kegiatan') {
    PageComponent = <GaleriKegiatan />;
  } else if (path === '/fasilitas-kegiatan') {
    PageComponent = <FasilitasKegiatan />;
  } else if (path === '/kurikulum-pembelajaran') {
    PageComponent = <KurikulumPembelajaran />;
  } else {
    PageComponent = <LandingPage />;
  }

  return <div className="w-full overflow-x-hidden">{PageComponent}</div>;
}

export default App;
