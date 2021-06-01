#include <stdio.h>
#include <stdlib.h>
#include <string.h>

void exit_sys(const char *msg)
{
    perror(msg);
    exit(EXIT_FAILURE);
}

void exit_failure(const char *msg)
{
    fprintf(stderr, "%s\n", msg);
    exit(EXIT_FAILURE);
}