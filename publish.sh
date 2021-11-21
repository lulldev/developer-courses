#!/bin/bash

marp ./courses/software-arch/lection1/lection-1-paradigms-live.md -o docs/software-arch-course/lection-1-paradigms-live.pdf --allow-local-files

git add ./docs/**/*

git commit -m "publish presentations"

git push