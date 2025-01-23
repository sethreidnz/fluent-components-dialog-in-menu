import {
  Menu,
  MenuTrigger,
  Button,
  MenuPopover,
  MenuList,
  MenuItem,
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogBody,
  DialogTitle,
  DialogContent,
  DialogActions,
} from "@fluentui/react-components";

function App() {
  return (
    <Menu positioning={{ autoSize: true }}>
      <MenuTrigger disableButtonEnhancement>
        <Button>Toggle menu</Button>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          <MenuItem>
            <Dialog>
              <DialogTrigger disableButtonEnhancement>
                <Button>Open dialog</Button>
              </DialogTrigger>
              <DialogSurface>
                <DialogBody>
                  <DialogTitle>Dialog title</DialogTitle>
                  <DialogContent>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quisquam exercitationem cumque repellendus eaque est dolor
                    eius expedita nulla ullam? Tenetur reprehenderit aut
                    voluptatum impedit voluptates in natus iure cumque eaque?
                  </DialogContent>
                  <DialogActions>
                    <Button appearance="primary">Do Something</Button>
                    <DialogTrigger disableButtonEnhancement>
                      <Button appearance="secondary">Close</Button>
                    </DialogTrigger>
                  </DialogActions>
                </DialogBody>
              </DialogSurface>
            </Dialog>{" "}
          </MenuItem>
        </MenuList>
      </MenuPopover>
    </Menu>
  );
}

export default App;
