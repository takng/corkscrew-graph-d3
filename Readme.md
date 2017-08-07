# Corkscrew Graph D3

## Corkscrew Graph
The problem that the corkscrew solves is representing data on a continuum (timeline for example) where the time between ticks is not equidistant. It is difficult to judge visually the relative distance between points that are not equidistant.

##### Example
`5, 6, 7, 20, 21, 24, 30, 100`

### Possible Other Solutions
Below are a few possible solutions that are easier to implement than the corkscrew graph.

#### No Relative Distances

Keep the ticks the same distance apart regardless of any gaps in the timeline.

##### Example
`-5-6-7-20-21-24-30-100-`

#### Graph Break / Break Symbol

The most common solution for showing that a line is very long without displaying as such is to use a Graph Break. This symbol looks like this: `--//--`. This solution is good for a small amount of very long breaks, but if there are many break then breaks can not easily be compared.

##### Example
`-5-6-7-//-20-21-----24-//-30-//-100-`

#### Varying Distances Between Ticks

If display space is not a concern the best solution would be to simple have an empty timeline to show gaps between ticks. Good for museums, but not so good for smaller displays.

##### Example
`-5-6-7-------------------------20-21-----24-----------30-----------------------------------------------------------------------------------------------------------------------------------------100-`
