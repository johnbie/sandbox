#!/bin/sh
curl smtp://mail.cexample.com --mail-from sender@example.com --mail-rcpt receiver@example.com --upload-file email.txt
