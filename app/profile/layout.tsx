'use client';
import React from 'react'
import Nav from '../../components/Nav'
import type { Metadata } from 'next'

export default function  ProfileLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
    <Nav/>
    <div>{children}</div>
    </>
  )
}
