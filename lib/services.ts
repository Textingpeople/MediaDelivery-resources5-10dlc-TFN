import {
  CalendarCheck, ListChecks, BellRing, CalendarSync, Users, Repeat, Timer, ClipboardCheck,
} from 'lucide-react';

// The 8 planner features shared by Home (short) and Product (long)
export const SERVICES = [
  {
    icon: CalendarCheck,
    label: 'Daily Plan',
    desc: 'Your events and to-dos combined into one simple view of the day.',
    long: 'Open DayFlow and see your day at a glance: your calendar events and your to-dos together in one simple plan. Move things around in seconds when the day changes.',
  },
  {
    icon: ListChecks,
    label: 'To-Do Lists',
    desc: 'Quick lists for errands, projects and everything in between.',
    long: 'Keep as many lists as you like, from weekend errands to a personal project. Check items off, reorder them and pull the ones that matter into today’s plan.',
  },
  {
    icon: BellRing,
    label: 'Personal Reminders',
    desc: 'Set a reminder for anything, and get it by text or in the app.',
    long: 'Set a reminder for anything you do not want to forget. You choose the time, and DayFlow sends it in the app or, if you opt in to texts, by text message.',
  },
  {
    icon: CalendarSync,
    label: 'Calendar Sync',
    desc: 'Connect your personal calendar (read-only) so nothing gets missed.',
    long: 'Connect your personal calendar so your events show up next to your to-dos. The connection is read-only, so DayFlow can show your events but never change them, and you can disconnect at any time.',
  },
  {
    icon: Users,
    label: 'Shared Household Calendar',
    desc: 'Share a calendar with family so everyone sees the week.',
    long: 'Create a calendar you share with the people you live with. Everyone can see what is happening this week, from appointments to weekend plans, without a group message thread.',
  },
  {
    icon: Repeat,
    label: 'Routines',
    desc: 'Morning and evening checklists that keep your day on rails.',
    long: 'Build a morning checklist and an evening checklist once, and DayFlow shows them every day. They are simple, repeatable and easy to adjust whenever your schedule changes.',
  },
  {
    icon: Timer,
    label: 'Focus Blocks',
    desc: 'Block time for what matters and protect it from interruptions.',
    long: 'Set aside time for the things that matter and put it on your plan as a focus block. Seeing it on your day makes it easier to protect from interruptions.',
  },
  {
    icon: ClipboardCheck,
    label: 'Weekly Review',
    desc: 'A 10-minute Sunday check-in to plan the week ahead.',
    long: 'Take ten minutes on Sunday to look at the week ahead, move unfinished to-dos forward and decide what comes first. You start Monday knowing what is next.',
  },
];
