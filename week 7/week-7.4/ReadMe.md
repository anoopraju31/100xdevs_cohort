# Week 7.4 | Recoil Deep Dive

### Topics to be cover:
1. **Basic:**
    - **Atoms** 
    - **Selectors**
    - **useRecoilState**
    - **useRecoilValue**
    - **useSetRecoilState**
    - **Asychronous Data Queries**
2. **Advance:**
    - **atomFamily**
    - **selectorFamily**
    - **useRecoilStateLoadable**
    - **useRecoilValueLoadable**

### Basics:
1. **Atom**: Atom is the most smallest unit of state that we can store, similar to **useState**. Atoms can be read from and written to from any component.
2. **Selector**: Selectors represent a function, or derived state in Recoil. It is similar to a pure function without any side-effects that always returns the same value for a given set of dependency values.
3. **useRecoilState**: useRecoilState is hook that lets us read and write to an atom from a component.
4. **useRecoilValue**: useRecoilValue hook returns the value of the given Recoil state. The useRecoilValue hook will subscribe the component to re-render if there are changing in the Recoil state.
5. **useSetRecoilState**: useSetRecoilState hook returns a setter function for updating the value of the writable Recoil state. The setter function which can be used asynchronously to change the state.