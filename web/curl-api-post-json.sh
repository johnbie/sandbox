#!/bin/sh
curl -d -X POST '{"name":"John","salary":"100","}' -H "Content-Type: application/json" https://dummy.restapiexample.com/api/v1/create
