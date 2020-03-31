# discord-bible-quiz
Asks questions based on different question types.

# Command format:

You can separate parameters using either :'s or ~'s.
e.g.'s

!quiz:[Question Type]:[Books (list of books by number)]:[Chapters (list of chapters by number)]

!quiz~[Question Type]\~[Books (list of books by number)]\~[Chapters (list of chapters by number)]

# Question Type:
1: General

2: Two Part

3: Three Part

4: Four Part

5: 5 Part

6: Multiple

7: FTV

8: Reference

9: Situation

# Book Numbers
Hebrews = 1

1 Peter = 2

2 Peter = 3

# Chapter Numbers

Whatever the chapter you want from in that book. (Can be a list)


# Example Commands:
For daily usage you might want to copy a command to your clipboard and keep returnning it, since these are admittedly a pain to type.

Get FTV from Hebrews first 5 chapters: `!quiz:7:1:1,2,3,4,5`

Get General from 2 Peter's chapter : `!quiz~1~3~3`

Get Situation from all material (Hebrews, 1 Peter, 2nd Peter): `!quiz~9:1,2,3~1,2,3,4,5,6,7,8,9,10,11,12,13`
