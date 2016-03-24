# affected
This module allows you to check your project's package.json against the modules recently been taken down from npmjs.org (Source: https://medium.com/@azerbike/i-ve-just-liberated-my-modules-9045c06be67c)

# Install
Ideally, you install the package globally to be able check regardless in which project folder you are currently located.
```bash
npm install -g affected
```

# Usage
By default, without any arguments, the tool assumes you are inside a project's folder which contains the `package.json` file.
```bash
affected
```

However, you can also specify a relative or absolute path.

```bash
affected ./package.json
affected package.json
affected /opt/project/package.json
```

# Example Output
```
Project not affected, all good!
```
or
```
Found affected dependency: left-pad
Dependency hierarchy: X -> Y -> left-pad
```
