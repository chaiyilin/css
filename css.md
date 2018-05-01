Apress.Pro.CSS3.Layout.Techniques

CSS 2.1

introduced and defined the four following layout modes for rendering web pages:
- Block layout for documents
- Inline layout for text
- Table layout for tabular data in a two-dimensional grid
- Positioned layout for explicitly positioning elements on the page, removing them
from the document flow

CSS 3
- Flexbox
  - display: flex;
  - flex-direction: row
  - flex-wrap: nowrap/wrap
  - flex-flow: flex-direction+flex-wrap
  - order:
  - -----Controlling the Flex
    - flex-grow
    - flex-shrink
    - flex-basis
    - flex: flex-grow+flex-shrink+flex-basis
  - -----alignment
    - two ways to control alignment along the main axis
      - margin
      - justify-content (on container)(applied after margin or flex):flex-start/flex-end/center/space-between/space-around
    - Cross Axis Alignment
      - align-items (on container)
        - flex-start/flex-end/center/baseline/stretch/auto
      - align-self (on item)
      - align-content (wrap or wrap-reverse enabled)
        - flex-start/flex-end/center/space-between/space-around


display

- static
- absolute
- fixed
- relative