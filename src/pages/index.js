import React from 'react';

import CustomLink from '../components/CustomLink';
import Image from '../components/Image';
import Layout from '../components/Layout';
import {
  IMAGE_SIZES,
  KNOWN_FRAMEWORKS_AND_TOOLS,
} from '../constants/Constants';
import firstImg from '../../static/First.png';
import profileImg from '../../static/kcn_image.jpg';
import mockup1 from '../../static/mockup-1 - First Page.png';
import mockup2 from '../../static/mockup-2 - Light and Dark Mode.png';
import mockup3 from '../../static/mockup-3 - In progress and Completed List.png';
import secondImg from '../../static/Second.png';
import './styles.css';

const IndexPage = () => {
  const renderWallpaperAppComponent = () => (
    <>
      <h1 className="p-4 bg-gradient-to-l from-stone-700 to-stone-600 text-3xl font-medium text-center">
        Wallpaper App
      </h1>
      <div className="flex items-center justify-center p-4 bg-gradient-to-l from-stone-800 to-stone-600">
        <ul className="flex flex-col m-4 text-justify text-lg list-disc">
          <li className="m-4">
            This app uses{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://www.pexels.com/api'}
            >
              Pexels API
            </CustomLink>{' '}
            to render images by 'Category', and has an option to download the
            image on the phone.
          </li>
          <li className="m-4">
            It is created using{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://www.reactnative.dev'}
            >
              React Native
            </CustomLink>{' '}
            to develop app that is ready on both Android and iOS platforms,
            while coding in JS.
          </li>
          <li className="m-4">
            There are many libraries like{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={
                'https://docs.swmansion.com/react-native-gesture-handler/docs/'
              }
            >
              react-native-gesture-handler
            </CustomLink>{' '}
            and{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://github.com/meliorence/react-native-snap-carousel'}
            >
              react-native-snap-carousel
            </CustomLink>{' '}
            that are used in the app.
          </li>
        </ul>
        <img src={secondImg} height={360} width={360} />
      </div>
      <div className="flex items-center justify-center p-4 bg-gradient-to-l from-stone-800 to-stone-700">
        <img src={firstImg} height={360} width={360} />
        <ul className="flex flex-col m-4 text-justify text-lg list-disc">
          <li className="m-4">
            Utilizing memoization techniques using{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://react.dev/reference/react/useCallback'}
            >
              useCallback
            </CustomLink>
            ,{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://react.dev/reference/react/useMemo'}
            >
              useMemo
            </CustomLink>{' '}
            and{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://react.dev/reference/react/memo'}
            >
              React.memo
            </CustomLink>
            .
          </li>
          <li className="m-4">
            Used{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://reactnative.dev/docs/permissionsandroid'}
            >
              PermissionsAndroid
            </CustomLink>{' '}
            to get the user's permission to store the image on their device.
          </li>
          <li className="m-4">
            To install the app from source and know more, head over to the app's
            source code on my{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://github.com/KiranCNayak/rn_app_03_wallpaper_app'}
              target="_blank"
            >
              GitHub Repo
            </CustomLink>
            .
          </li>
        </ul>
      </div>
    </>
  );
  const renderTodoAppComponent = () => (
    <>
      <h1 className="p-4 mt-4 bg-gradient-to-l from-stone-700 to-stone-600 text-3xl font-medium text-center">
        Todo App
      </h1>
      <div className="flex items-center justify-center p-4 bg-gradient-to-l from-stone-800 to-stone-600">
        <ul className="flex flex-col m-4 text-justify text-lg list-disc">
          <li className="m-4">
            This app uses components built from scratch like BottomSheet, Day /
            Night Switch, and external libraries for swipe gesture handling.
          </li>
          <li className="m-4">
            Memoization is done using{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://react.dev/reference/react/useCallback'}
            >
              useCallback
            </CustomLink>
            ,{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://react.dev/reference/react/useMemo'}
            >
              useMemo
            </CustomLink>{' '}
            and{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://react.dev/reference/react/memo'}
            >
              React.memo
            </CustomLink>
            .
          </li>
        </ul>
        <img src={mockup1} height={360} width={360} />
      </div>
      <div className="flex items-center justify-center p-4 bg-gradient-to-l from-stone-800 to-stone-700">
        <img src={mockup2} height={360} width={360} />
        <ul className="flex flex-col m-4 text-justify text-lg list-disc">
          <li className="m-4">
            Used{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://redux-toolkit.js.org'}
            >
              Redux Toolkit
            </CustomLink>{' '}
            and{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://react-redux.js.org'}
            >
              React Redux
            </CustomLink>{' '}
            for state management.
          </li>
          <li className="m-4">
            Dark and Light mode switch to toggle the mode, whose value is stored
            in{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={
                'https://react-native-async-storage.github.io/async-storage/'
              }
            >
              AsyncStorage
            </CustomLink>
            .
          </li>
        </ul>
      </div>
      <div className="flex items-center justify-center p-4 bg-gradient-to-l from-stone-800 to-stone-600">
        <ul className="flex flex-col m-4 text-justify text-lg list-disc">
          <li className="m-4">
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={
                'https://react-native-async-storage.github.io/async-storage/'
              }
            >
              AsyncStorage
            </CustomLink>{' '}
            is used to store the Todo List on each item being created, deleted,
            updated.
          </li>
          <li className="m-4">
            To install the app from source and know more, head over to the app's
            source code on my{' '}
            <CustomLink
              color={'yellow'}
              colorVariant={500}
              href={'https://github.com/KiranCNayak/rn_app_02_todo_app'}
            >
              GitHub Repo
            </CustomLink>{' '}
            .
          </li>
        </ul>
        <img src={mockup3} height={360} width={360} />
      </div>
    </>
  );

  return (
    <Layout>
      <div className="flex bg-slate-500 p-4">
        <div className="flex items-center">
          <Image
            size={IMAGE_SIZES['5xl'].key}
            alt={'profile'}
            src={profileImg}
            rounded
          />
        </div>
        <div className="flex flex-col flex-grow items-center">
          <p className="text-5xl font-bold leading-normal">Kiran C Nayak</p>
          <div className="flex flex-col items-center">
            <p className="text-xl font-semibold leading-loose">
              Frontend Developer with experience in
            </p>
            <div className="flex flex-row">
              {KNOWN_FRAMEWORKS_AND_TOOLS.map((item) => (
                <div
                  className="tooltip"
                  data-text={item.toolTipText}
                  key={item.id}
                >
                  <Image
                    size={IMAGE_SIZES.small.key}
                    alt={item.alt}
                    src={item.src}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div id="projects" className="text-white flex flex-col">
        <p className={'p-4 text-3xl font-bold'}>MY PROJECTS</p>
        {renderWallpaperAppComponent()}
        {renderTodoAppComponent()}
      </div>
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
