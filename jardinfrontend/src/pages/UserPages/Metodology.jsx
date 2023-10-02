/* This example requires Tailwind CSS v2.0+ */
import React, { useState } from 'react';
import { Fragment, useEffect, useRef } from 'react';
import { Container, Draggable } from 'react-smooth-dnd';


import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
} from '@heroicons/react/solid';
import { Menu, Transition } from '@headlessui/react';

const days = [
  { date: '2021-12-27' },
  { date: '2021-12-28' },
  { date: '2021-12-29' },
  { date: '2021-12-30' },
  { date: '2021-12-31' },
  { date: '2022-01-01', isCurrentMonth: true },
  { date: '2022-01-02', isCurrentMonth: true },
  { date: '2022-01-03', isCurrentMonth: true },
  { date: '2022-01-04', isCurrentMonth: true },
  { date: '2022-01-05', isCurrentMonth: true },
  { date: '2022-01-06', isCurrentMonth: true },
  { date: '2022-01-07', isCurrentMonth: true },
  { date: '2022-01-08', isCurrentMonth: true },
  { date: '2022-01-09', isCurrentMonth: true },
  { date: '2022-01-10', isCurrentMonth: true },
  { date: '2022-01-11', isCurrentMonth: true },
  { date: '2022-01-12', isCurrentMonth: true, isToday: true },
  { date: '2022-01-13', isCurrentMonth: true },
  { date: '2022-01-14', isCurrentMonth: true },
  { date: '2022-01-15', isCurrentMonth: true },
  { date: '2022-01-16', isCurrentMonth: true },
  { date: '2022-01-17', isCurrentMonth: true },
  { date: '2022-01-18', isCurrentMonth: true },
  { date: '2022-01-19', isCurrentMonth: true },
  { date: '2022-01-20', isCurrentMonth: true },
  { date: '2022-01-21', isCurrentMonth: true },
  { date: '2022-01-22', isCurrentMonth: true, isSelected: true },
  { date: '2022-01-23', isCurrentMonth: true },
  { date: '2022-01-24', isCurrentMonth: true },
  { date: '2022-01-25', isCurrentMonth: true },
  { date: '2022-01-26', isCurrentMonth: true },
  { date: '2022-01-27', isCurrentMonth: true },
  { date: '2022-01-28', isCurrentMonth: true },
  { date: '2022-01-29', isCurrentMonth: true },
  { date: '2022-01-30', isCurrentMonth: true },
  { date: '2022-01-31', isCurrentMonth: true },
  { date: '2022-02-01' },
  { date: '2022-02-02' },
  { date: '2022-02-03' },
  { date: '2022-02-04' },
  { date: '2022-02-05' },
  { date: '2022-02-06' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const container = useRef(null);
  const containerNav = useRef(null);
  const containerOffset = useRef(null);

  useEffect(() => {
    // Set the container scroll position based on the current time.
    const currentMinute = new Date().getHours() * 60;
    container.current.scrollTop =
      ((container.current.scrollHeight -
        containerNav.current.offsetHeight -
        containerOffset.current.offsetHeight) *
        currentMinute) /
      1440;
  }, []);
  const [currentDate, setCurrentDate] = useState(new Date());

  const handleNextDayClick = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() + 1);
    setCurrentDate(nextDay);
  };
  const handlePreviusDayClick = () => {
    const nextDay = new Date(currentDate);
    nextDay.setDate(currentDate.getDate() - 1);
    setCurrentDate(nextDay);
  };
  return (
    <div className="flex h-full flex-col">
      <header className="relative z-20 flex flex-none items-center justify-between border-b border-gray-200 py-4 px-6">
       
        <h1 className="text-lg font-semibold leading-6 text-gray-900">
        <time dateTime={currentDate.toISOString()} className="sm:hidden">
        {currentDate.toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
        <time dateTime={currentDate.toISOString()} className="hidden sm:inline">
          {currentDate.toLocaleDateString('es-ES', { month: 'long', day: 'numeric', year: 'numeric' })}
        </time>
          </h1>
          <p className="mt-1 text-sm text-gray-500">{currentDate.toLocaleDateString('en-ES', { weekday: 'long' })}</p>
      <div className="flex items-center">
        <div className="flex items-center rounded-md shadow-sm md:items-stretch">
          <button
            type="button"
            onClick={handlePreviusDayClick}
            className="flex items-center justify-center rounded-l-md border border-r-0 border-gray-300 bg-white py-2 pl-3 pr-4 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span className="sr-only">Previous Day</span>
            <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
          </button>
      
     

       
            <span className="relative -mx-px h-5 w-px bg-gray-300 md:hidden" />
          <button
            type="button"
            onClick={handleNextDayClick}
            className="flex items-center justify-center rounded-r-md border border-l-0 border-gray-300 bg-white py-2 pl-4 pr-3 text-gray-400 hover:text-gray-500 focus:relative md:w-9 md:px-2 md:hover:bg-gray-50"
          >
            <span className="sr-only">Next Day</span>
            <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
          </button>
          </div>
          <div className="hidden md:ml-4 md:flex md:items-center">
            <Menu as="div" className="relative">
              <Menu.Button
                type="button"
                className="flex items-center rounded-md border border-gray-300 bg-white py-2 pl-3 pr-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50"
              >
                Day view
                <ChevronDownIcon
                  className="ml-2 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Day view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Week view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Month view
                        </a>
                      )}
                    </Menu.Item>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href="#"
                          className={classNames(
                            active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700',
                            'block px-4 py-2 text-sm'
                          )}
                        >
                          Year view
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
            <div className="ml-6 h-6 w-px bg-gray-300" />
    
          </div>
          <Menu as="div" className="relative ml-6 md:hidden">
            <Menu.Button className="-mx-2 flex items-center rounded-full border border-transparent p-2 text-gray-400 hover:text-gray-500">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-5 w-5" aria-hidden="true" />
            </Menu.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="focus:outline-none absolute right-0 mt-3 w-36 origin-top-right divide-y divide-gray-100 overflow-hidden rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Create event
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Go to today
                      </a>
                    )}
                  </Menu.Item>
                </div>
                <div className="py-1">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Day view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Week view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Month view
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Year view
                      </a>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </header>
      <div className="flex flex-auto overflow-hidden bg-white">
        <div ref={container} className="flex flex-auto flex-col overflow-auto">
          <div
            ref={containerNav}
            className="sticky top-0 z-10 grid flex-none grid-cols-7 bg-white text-xs text-gray-500 shadow ring-1 ring-black ring-opacity-5 md:hidden"
          >
            <button
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>W</span>
              {/* Default: "text-gray-900", Selected: "bg-gray-900 text-white", Today (Not Selected): "text-indigo-600", Today (Selected): "bg-indigo-600 text-white" */}
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                19
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>T</span>
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-indigo-600">
                20
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>F</span>
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                21
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>S</span>
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full bg-gray-900 text-base font-semibold text-white">
                22
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>S</span>
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                23
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>M</span>
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                24
              </span>
            </button>
            <button
              type="button"
              className="flex flex-col items-center pt-3 pb-1.5"
            >
              <span>T</span>
              <span className="mt-3 flex h-8 w-8 items-center justify-center rounded-full text-base font-semibold text-gray-900">
                25
              </span>
            </button>
          </div>
          <div className="flex w-full flex-auto">
            <div className="w-14 flex-none bg-white ring-1 ring-gray-100" />
            <div className="grid flex-auto grid-cols-1 grid-rows-1">
              {/* Horizontal lines */}
              <div
                className="col-start-1 col-end-2 row-start-1 grid divide-y divide-gray-100"
                style={{ gridTemplateRows: 'repeat(48, minmax(3.5rem, 1fr))' }}
              >
                <div ref={containerOffset} className="row-end-1 h-7"></div>
               
                <div />
                <div>
                  <div className="sticky left-0 -mt-9.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    6AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    7AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    8AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    9AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11AM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    12PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    1PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    2PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    3PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    4PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    5PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    6PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    7PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    8PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    9PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    10PM
                  </div>
                </div>
                <div />
                <div>
                  <div className="sticky left-0 -mt-2.5 -ml-14 w-14 pr-2 text-right text-xs leading-5 text-gray-400">
                    11PM
                  </div>
                </div>
                <div />
              </div>

              {/* Events */}
              <ol
                className="col-start-1 col-end-2 row-start-1 grid grid-cols-1"
                style={{
                  gridTemplateRows: '1.75rem repeat(288, minmax(0, 1fr)) auto',
                }}
              >
             
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: '19 / span 14' }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-5 text-xls leading-5 hover:bg-pink-100"
                  >
                    <p className="order-1 font-semibold text-pink-700">
                     Juego Libre 
                    </p>
                    <p className="order-1 text-pink-500 group-hover:text-pink-700">
                      Estudiantes
                    </p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-22T07:30">7:00 AM - 8:00 AM</time>
                    </p>
                  </a>
                </li>
                <li
                  className="relative mt-px flex"
                  style={{ gridRow: '33 / span 12' }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-2 text-xls leading-5 hover:bg-blue-100"
                  >
                    <p className="order-1 font-semibold text-blue-700">
                    Actividades de Rutina
                    </p>
                    <p className="order-1 text-blue-500 group-hover:text-blue-700">
                      Estudiantes & Profesores
                    </p>
                    <p className="text-blue-500 group-hover:text-blue-700">
                      <time dateTime="2022-01-22T06:00">8:00 AM - 9:00 AM</time>
                    </p>
                  </a>
                </li>

                <li
                  className="relative mt-px flex"
                  style={{ gridRow: '45 / span 12' }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-2 text-xls leading-5 hover:bg-indigo-100"
                  >
                    <p className="order-1 font-semibold text-indigo-700">
                     Actividad pedagógica
                    </p>
                    <p className="order-1 text-indigo-500 group-hover:text-indigo-700">
                      Estudiantes
                    </p>
                    <p className="text-indigo-500 group-hover:text-indigo-700">
                      <time dateTime="2022-01-22T11:00">9:00 AM - 10:00 AM</time>
                    </p>
                  </a>
                </li>

                <li
                  className="relative mt-px flex"
                  style={{ gridRow: '57 / span 14' }}
                >
                  <a
                    href="#"
                    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-5 text-xls leading-5 hover:bg-pink-100"
                  >
                    <p className="order-1 font-semibold text-pink-700">
                    Onces -Parque
                    </p>
                    <p className="order-1 text-pink-500 group-hover:text-pink-700">
                      Estudiantes
                    </p>
                    <p className="text-pink-500 group-hover:text-pink-700">
                      <time dateTime="2022-01-22T07:30">10:00 AM - 11:00 AM</time>
                    </p>
                  </a>
                </li>
                <li
  className="relative mt-px flex"
  style={{ gridRow: '71 / span 12' }}
>
  <a
    href="#"
    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-5 text-xls leading-5 hover:bg-blue-100"
  >
    <p className="order-1 font-semibold text-blue-700">
    Actividad pedagógica
    </p>
    <p className="order-1 text-blue-500 group-hover:text-blue-700">
      Estudiantes
    </p>
    <p className="text-blue-500 group-hover:text-blue-700">
      <time dateTime="2022-01-22T12:00">11:00 AM - 12:00 PM</time>
    </p>
  </a>
</li>

{/* Sexto Elemento */}


{/* Séptimo Elemento */}
<li
  className="relative mt-px flex"
  style={{ gridRow: '83 / span 22' }}
>
  <a
    href="#"
    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-yellow-50 p-5 text-xls leading-5 hover:bg-pink-100"
  >
    <p className="order-1 font-semibold text-yellow-700">
      ALMUERZO & DESCANSO
    </p>
    <p className="order-1 text-yellow-500 group-hover:text-yellow-700">
      Estudiantes y profesores
    </p>
    <p className="text-yellow-500 group-hover:text-yellow-700">
      <time dateTime="2022-01-22T14:00">12:00 PM - 2:00 PM</time>
    </p>
  </a>
</li>
<li
  className="relative mt-px flex"
  style={{ gridRow: '105 / span 12' }}
>
  <a
    href="#"
    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-blue-50 p-5 text-xls leading-5 hover:bg-blue-100"
  >
    <p className="order-1 font-semibold text-blue-700">
       Hora Literaria
    </p>
    <p className="order-1 text-blue-500 group-hover:text-blue-700">
       Profesores A Estudiantes
    </p>
    <p className="text-blue-500 group-hover:text-blue-700">
      <time dateTime="2022-01-22T15:00">2:00 PM - 3:00 PM</time>
    </p>
  </a>
</li>

{/* Décimo Elemento (3:00 PM - 4:00 PM) */}
<li
  className="relative mt-px flex"
  style={{ gridRow: '117 / span 12' }}
>
  <a
    href="#"
    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-indigo-50 p-5 text-xls leading-5 hover:bg-indigo-100"
  >
    <p className="order-1 font-semibold text-indigo-700">
      Taller de Arte
    </p>
    <p className="order-1 text-indigo-500 group-hover:text-indigo-700">
      Estudiantes
    </p>
    <p className="text-indigo-500 group-hover:text-indigo-700">
      <time dateTime="2022-01-22T16:00">3:00 PM - 4:00 PM</time>
    </p>
  </a>
</li>

{/* Undécimo Elemento (4:00 PM - 5:00 PM) */}
<li
  className="relative mt-px flex"
  style={{ gridRow: '129 / span 12' }}
>
  <a
    href="#"
    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-5 text-xls leading-5 hover:bg-pink-100"
  >
    <p className="order-1 font-semibold text-pink-700">
     Actividad Recreativa
    </p>
    <p className="order-1 text-pink-500 group-hover:text-pink-700">
      Todos
    </p>
    <p className="text-pink-500 group-hover:text-pink-700">
      <time dateTime="2022-01-22T17:00">4:00 PM - 5:00 PM</time>
    </p>
  </a>
</li>

<li
  className="relative mt-px flex"
  style={{ gridRow: '143 / span 12' }}
>
  <a
    href="#"
    className="group absolute inset-1 flex flex-col overflow-y-auto rounded-lg bg-pink-50 p-5 text-xls leading-5 hover:bg-pink-100"
  >
    <p className="order-1 font-semibold text-pink-700">
    FIN DE ACTIVIDADES!!!
    </p>
    <p className="order-1 text-pink-500 group-hover:text-pink-700">
      Todos
    </p>
    <p className="text-pink-500 group-hover:text-pink-700">
      <time dateTime="2022-01-22T17:00">5:00 PM - 5:10 PM</time>
    </p>
  </a>
</li>

              </ol>
            </div>
          </div>
        </div>
        <div className="hidden w-100 max-w-md flex-none border-l border-gray-100 py-10 px-8 md:block">
        
        </div>
      </div>
    </div>
  );
}
