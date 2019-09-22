
Install build deps

```
sudo apt-get install build-essential libudev-dev
```

Install n

```
curl -L https://git.io/n-install | bash
```

Install node 8 (required for blinkstick)

```
n 8
```

Install node deps

```
npm install
```

Adjust pi audio volume

```
alsamixer
```

Run as root

```
sudo /home/pi/n/bin/node index.js
```
